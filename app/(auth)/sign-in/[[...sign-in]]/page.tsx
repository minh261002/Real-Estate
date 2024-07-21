import { SignIn } from "@clerk/nextjs";

const Page = () => {

    return (
        <div className="flex items-center">
            <SignIn />
        </div>
    )
}

export default Page