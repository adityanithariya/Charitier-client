import Signup from "@/components/Signup";
import Main from "@components/Main";
import styles from "@css/Home.module.css";

export default function Home() {
    return (
        <div className={styles.root}>
            <Signup />
        </div>
    );
}
