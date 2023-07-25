import Link from "next/link"

export default function SuccessPage() {
    return (
        <div>
            <h3 className="text-xl text-gray">You have successfully paid</h3>
            <Link className="cusor-point text-blue-400" href={'/'}>Back home</Link>
        </div>
    )
}