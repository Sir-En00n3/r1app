import { useRouter } from "next/router";

/**
 * BackBtn component that allows users to navigate back to the previous page.
 * The component uses the useRouter hook from Next.js to access the router object and navigate back when the button is clicked.
 *
 * @returns A button element that, when clicked, navigates the user back to the previous page.
 */
export default function BackBtn() {
    const router = useRouter();
    
    return (
        <button
            onClick={() => router.back()}
            className="mybtn"
        >
            Back
        </button>
    );
}