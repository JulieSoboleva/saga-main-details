import { Alert, Button } from "antd";
import { useAppDispatch, useAppSelector } from "../hooks";

export default function Error() {
    const errFunc = useAppSelector((state) => state.data.errorFunc);
    const dispatch = useAppDispatch();

    return (
        <div className='details__card'>
            <Alert
                message="Произошла ошибка!"
                type="error"
                action={
                    <Button size='middle' type="primary" 
                        onClick={() => errFunc && dispatch(errFunc) }>
                        Повторить
                    </Button>
                }
            />
        </div>
    );
}