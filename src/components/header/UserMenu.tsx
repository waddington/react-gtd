import { signIn, signOut, useSession } from "next-auth/react";
import { IconUserCircle, IconChevronDown } from "@tabler/icons";
import { createStyles, Button } from "@mantine/core";
import { useState } from "react";

const useStyles = createStyles((theme, _params, getRef) => ({
    menuMainElement: {
        display: "flex",
        cursor: "pointer",
        p: {
            margin: 0,
            lineHeight: "30px",
        },
        svg: {
            width: "30px",
        },
    },
    menuWrapper: {
        position: "relative",
    },
    subMenu: {
        position: "absolute",
    },
}));

interface UserMenuProps {}

export const UserMenu = ({}: UserMenuProps) => {
    const { data: session } = useSession();
    const { classes, theme, cx } = useStyles();
    const [subMenuVisible, setSubMenuVisible] = useState<boolean>(false);

    if (!session) {
        return <Button onClick={() => signIn()}>Sign in</Button>;
    }

    const userFirstName = session.user?.name?.split(" ").shift();

    return (
        <div className={classes.menuWrapper}>
            <div
                className={classes.menuMainElement}
                onClick={() => setSubMenuVisible((prev) => !prev)}
            >
                <IconUserCircle />
                {userFirstName ? (
                    <p>Hello, {userFirstName}</p>
                ) : (
                    <p>Hello, User</p>
                )}
                <IconChevronDown />
            </div>
            {subMenuVisible && (
                <div className={classes.subMenu}>
                    <p>Peekaboo!</p>
                    <p>
                        <button onClick={() => signOut()}>Sign out</button>
                    </p>
                </div>
            )}
        </div>
    );
};
