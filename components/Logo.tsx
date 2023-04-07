import Image from "next/image";

function Logo(props: any) {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center">
      <Image
        className="object-cover rounded-full"
        width={50}
        height={50}
        src="/images/johncaneroProfile.jpg"
        alt="Logo"
      />
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  );
}

export default Logo;