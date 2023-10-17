export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section className={"bg-pink-400 p-4 text-lg"}> {children}</section>
}