import { collection, query, where, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";
import { db } from "../../../firebase"; // Update with your actual firebase config path

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json(
        { success: false, message: "Username and password are required." },
        { status: 400 }
      );
    }

    const usersRef = collection(db, "users");
    const q = query(usersRef, where("username", "==", username));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return NextResponse.json(
        { success: false, message: "Invalid username or password." },
        { status: 401 }
      );
    }

    // Extract the user data
    let user;
    querySnapshot.forEach((doc) => {
      user = doc.data();
    });

    // Directly compare the entered password with the stored password
    if (password !== user.password) {
      return NextResponse.json(
        { success: false, message: "Invalid username or password." },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Login successful!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong." },
      { status: 500 }
    );
  }
}
