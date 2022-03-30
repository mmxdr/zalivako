import React, { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import Modal from "./modal";
import styles from "@styles/header.module.scss";

const Header: FunctionComponent = () => {
  const router = useRouter();
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <a className={styles.logo}>SASHA ZALIVAKO</a>
        </Link>
        <div className={styles.right}>
          <Link href="/">
            <a className={styles.cv}>CV</a>
          </Link>
          <Link href="/">
            <a className={styles.contacts}>
              <Image
                src="/phone.svg"
                layout="responsive"
                width={31}
                height={31}
                alt="Contacts icon"
              />
            </a>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;