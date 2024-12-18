// app/api/register/route.js
import { NextResponse } from 'next/server';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../firebase'; // Adjust path to firebase.js if needed

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    // Validate input
    if (!username || !password) {
      return NextResponse.json(
        { success: false, message: 'Username and password are required.' },
        { status: 400 }
      );
    }

    // Check if username already exists in Firestore
    const usersRef = collection(db, 'users'); // 'users' is the collection name
    const q = query(usersRef, where('username', '==', username));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return NextResponse.json(
        { success: false, message: 'Username already exists.' },
        { status: 409 } // Conflict status code
      );
    }

    // Add the new user to Firestore
    await addDoc(usersRef, { username, password });

    return NextResponse.json(
      { success: true, message: 'Registration successful!' },
      { status: 201 } // Created status code
    );
  } catch (error) {
    console.error('Error registering user:', error);
    return NextResponse.json(
      { success: false, message: 'Something went wrong.' },
      { status: 500 }
    );
  }
}
