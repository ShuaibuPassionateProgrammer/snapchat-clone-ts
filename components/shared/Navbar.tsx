import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LogoutButton from "./logout-button";
import { auth } from "@/auth";

const Navbar = () => {
    const session = await auth();

    return (
        <div>
            <h1>Navbar</h1>
        </div>
    );
};

export default Navbar;