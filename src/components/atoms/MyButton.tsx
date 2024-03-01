import { Button } from "@chakra-ui/react";
import { FC, memo } from "react";
type Props = {
    children: string;
    click: () => void;
}
export const MyButton: FC<Props> = memo((props) => {
    const {children, click} = props;
    return (
        <Button _hover={{opacity: 0.5}} variant='outline' colorScheme='red' onClick={click}>
            {children}
        </Button>
    )
})