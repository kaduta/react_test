import { memo, useState, ChangeEvent} from "react";
import { Input, ListIcon, ListItem, List } from "@chakra-ui/react";

import { MyButton } from "../atoms/MyButton";

export const Home = memo(() => {
    const [myText, setMyText] = useState<string>("")
    const onClickExe = () => {
        alert(myText);
        setMyText("");
    };
    const onChangeMyText = (event: ChangeEvent<HTMLInputElement>) => setMyText(event.target.value)
    return (
        <div>
            <Input value={myText} placeholder='優しく入力してください。' onChange={onChangeMyText} htmlSize={20} width='xs' variant='flushed' />
            <MyButton click={onClickExe}>test</MyButton>
            <br />
            <List spacing={3}>
                <ListItem>
                    
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </ListItem>
                <ListItem>
                    
                    Assumenda, quia temporibus eveniet a libero incidunt suscipit

                </ListItem>
                <ListItem>
                    
                    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                </ListItem>
                {/* You can also use custom icons from react-icons */}
                <ListItem>
                
                    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                </ListItem>
            </List>
        </div>
    )
})