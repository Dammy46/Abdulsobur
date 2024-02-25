import Link from "next/link";
import variable from "./footer.module.scss";
import Magnet from "../../../Magnet";
import { socials } from "@/utils/data";

export default function index() {
  return (
    <div className={variable.footer}>
      {
        socials.map((social, index) => (

      <Magnet key={index}>
        <Link href={social.url} aria-label={social.name}>
       {social.name}
        </Link>
      </Magnet>
        ))
      }
    
    </div>
  );
}
