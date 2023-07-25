import Link from "next/link";

export default function CancelPage() {
    return (
        <div>
        <h3 className="text-xl text-gray">Your payment failed</h3>
        <Link className="cusor-point text-blue-400" href={'/'}>Back home</Link>
    </div>
    )
}