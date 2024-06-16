import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/70c8ba71-30dc-4ca2-9aef-c3b492508698-9e5phx.png",
  "https://utfs.io/f/41717744-4b6e-4473-a921-ae587b92b5bb-59fsqg.jpg",
  "https://utfs.io/f/41717744-4b6e-4473-a921-ae587b92b5bb-59fsqg.jpg",
  "https://utfs.io/f/41717744-4b6e-4473-a921-ae587b92b5bb-59fsqg.jpg",
  "https://utfs.io/f/41717744-4b6e-4473-a921-ae587b92b5bb-59fsqg.jpg",
  "https://utfs.io/f/41717744-4b6e-4473-a921-ae587b92b5bb-59fsqg.jpg",
  "https://utfs.io/f/41717744-4b6e-4473-a921-ae587b92b5bb-59fsqg.jpg",
  "https://utfs.io/f/41717744-4b6e-4473-a921-ae587b92b5bb-59fsqg.jpg",
  "https://utfs.io/f/41717744-4b6e-4473-a921-ae587b92b5bb-59fsqg.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48 p-2">
            <img src={image.url} className="w-full" />
          </div>
        ))}
      </div>
      Hello ( galery in progress )
    </main>
  );
}
