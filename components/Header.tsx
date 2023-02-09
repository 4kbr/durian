import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="relative ">
        <Image
          src={"https://rb.gy/vsvv2o"}
          alt={"durian runtuh"}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </header>
  );
}
