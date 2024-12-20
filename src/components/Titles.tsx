import Link from "next/link";

interface SectionTitleProps {
    title: string;
    page?: string;
}

export const SectionTitle = ({title, page}: SectionTitleProps) => {
    return (
        <>
            <div className="flex items-center justify-between my-8 capitalize">
                <h4 className="text-4xl">
                    {title}
                </h4>
                {page &&
                    <Link href={page} className={`capitalize transition duration-500 hover:text-main`}>
                        view all
                    </Link>
                }
            </div>
        </>
    )
}