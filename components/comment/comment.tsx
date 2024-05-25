import clsx from "clsx";

type CommentProp = {
    answer?: boolean
}

export default function Comment({answer = false}: CommentProp) {
    const width = answer ? "95%" : "100%";
    const renderAnswerTargetUser = () => {
        if(answer) {
            return (
                <h6 className="text-primary">@Murat YAPICI</h6>
            );
        }
        return null;
    }

    return (
        <div className={clsx({"d-flex flex-row": true, "justify-content-end": answer})}>
            <div className={clsx({"card": true, "mt-1": true})} style={{width}}>
                <div className="card-body">
                    {renderAnswerTargetUser()}
                    <h5 className="card-title m-0">Murat Yapıcı - <span
                        className="fs-6 text-body-secondary">muratyapiicii@gmail.com</span></h5>
                    <small className="card-subtitle text-body-secondary m-0">12.04.2024 17:48</small>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum non
                        felis sit amet ullamcorper. Etiam suscipit turpis quam. Duis vitae velit sem. Aenean faucibus at
                        purus et viverra. Cras quis placerat metus, et iaculis enim.</p>
                    <a href="#" className="card-link">Yanıtla</a>
                </div>
            </div>
        </div>
    )
}