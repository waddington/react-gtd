import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, _params, getRef) => ({}));

interface TodoOverviewProps {}

export const TodoListsOverview = ({}: TodoOverviewProps) => {
    const { classes, theme, cx } = useStyles();
    return (
        <div>
            <h1>View All Todo's</h1>
        </div>
    );
};
