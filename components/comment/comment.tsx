import clsx from "clsx";
import {Comment} from '../../service/model/comment/comment';
import moment from "moment";
import {useState, memo} from "react";
import {CommentRequestInput} from "../../service/commentService";
import {makeAnswer, getCommentAnswersByCommentId} from "../../service/commentService";
import Comments from "./comments";

type CommentProp = {
    comment: Comment
}

interface FormValues {
    name: string,
    lastName: string,
    email: string,
    text: string
}

const emptyFormValues = {
    name: "",
    lastName: "",
    email: "",
    text: "",
}

export default function Comment(props: CommentProp) {
    const [showCommentArea, setShowCommentArea] = useState(false);
    const [formValues, setFormValues] = useState<FormValues>(emptyFormValues);
    const [makeCommentLoading, setMakeCommentLoading] = useState<boolean>(false);
    const [areAnswersFetched, setAreAnswersFetched] = useState<boolean>(false);
    const [answersLoading, setAnswersLoading] = useState<boolean>(false);

    const marginStyleAttributes = (props.comment.isAnswer) ? {marginLeft: "10px", marginRight: "10px"} : {};
    const renderAnswerTargetUser = () => {
        if(props.comment.isAnswer) {
            return (
                <h6 className="text-primary">@{props.comment.parentComment.name + props.comment.parentComment.lastName}</h6>
            );
        }
        return null;
    }

    const handleClickShowCommentArea = () => {
        setShowCommentArea(!showCommentArea);
    }

    const handleMakeComment = (e: any) => {
        e.preventDefault();
        const requestInput: CommentRequestInput = {
            name: formValues.name,
            lastName: formValues.lastName,
            email: formValues.email,
            isAnswer: true,
            text: formValues.text,
            parentCommentId: props.comment.id
        };

        setMakeCommentLoading(true);
        makeAnswer({commentId: props.comment.id}, requestInput)
            .then(response => {
                setFormValues(emptyFormValues)
            })
            .catch(error => {

            })
            .finally(() => {
                setMakeCommentLoading(false);

            });
    }

    const handleChangeValue = (e: any) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const getCommentAnswers = async (parentCommentId: string) => {
        if(!areAnswersFetched) {
            setAnswersLoading(true);
            await getCommentAnswersByCommentId({commentId: parentCommentId});
            setAreAnswersFetched(true);
            setAnswersLoading(false);
        }
    }

    const renderAnswers = () => {
        if(answersLoading) {
            return (
                <div className="spinner-border spinner-border-sm" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            )
        }

        return (
            <Comments fetchMethod={getCommentAnswersByCommentId} params={{commentId: props.comment.id}}/>
        )
    }

    const renderCommentArea = () => {
        if(showCommentArea) {
            return (
                <>
                    <form className="p-2" onSubmit={handleMakeComment}>
                        <div className="row">
                            <div className="col-6">
                                <label htmlFor="name" className="form-label">Ad</label>
                                <input id="name" type="text" name="name" className="form-control border border-1 border-secondary" maxLength={30} value={formValues.name} onChange={handleChangeValue} required/>
                            </div>
                            <div className="col-6">
                                <label htmlFor="lastName" className="form-label">Soyad</label>
                                <input id="lastName" type="text" name="lastName" className="form-control border border-1 border-secondary" maxLength={30} value={formValues.lastName}  onChange={handleChangeValue} required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <label htmlFor="email" className="form-label">E-mail</label>
                                <input id="email" type="email" name="email" className="form-control border border-1 border-secondary" maxLength={100} value={formValues.email}  onChange={handleChangeValue} required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col position-relative">
                                <label htmlFor="text" className="form-label">Yorumunu yaz</label>
                                <div className="form-text position-absolute end-0 top-0">{formValues.text.length} / 3000</div>
                                <textarea id="text" name="text" className="form-control border border-1 border-secondary" rows={3} required onChange={handleChangeValue} maxLength={3000} value={formValues.text}></textarea>
                                <div className="form-text">Yorumunuz, yayımlanmadan önce incelenecektir. Lütfen saygılı ve yapıcı bir dil kullanın.</div>
                            </div>
                        </div>
                        {(makeCommentLoading) ? (
                            <div className="spinner-border float-end spinner-border-sm" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        ): (
                            <>
                                <button type="submit" className="btn btn-success btn-sm mt-2 m-2 float-end">Yanıtla</button>
                                <button type="button" className="btn btn-secondary btn-sm mt-2 float-end">İptal</button>
                            </>
                        )}
                    </form>
                </>
            )
        }
        return null;
    }

    return (
        <div className={clsx({"d-flex flex-row": true, "justify-content-end": props.comment.isAnswer})}>
            <div className={clsx({"card": true, "mt-1": true})} style={{width: "100%", ...marginStyleAttributes}}>
                <div className="card-body">
                    {renderAnswerTargetUser()}
                    <h5 className="card-title m-0">{props.comment.name + " " + props.comment.lastName} - <span
                        className="fs-6 text-body-secondary">{props.comment.email}</span></h5>
                    <small className="card-subtitle text-body-secondary m-0">{moment(new Date(props.comment.createdAt)).format("DD.MM.YYYY HH:mm")}</small>
                    <p className="card-text">{props.comment.text}</p>
                    {(props.comment.amountOfAnswers > 0) ? (
                        <>
                            <hr/>
                            <button className="btn btn-primary btn-sm" onClick={handleClickShowCommentArea}>Yanıtla</button>
                            {renderCommentArea()}
                            <p className="d-inline-flex gap-1">
                                <a className="btn btn-link" data-bs-toggle="collapse" href={"#" + props.comment.id} role="button" aria-expanded="false" aria-controls="collapseExample"
                                onClick={() => getCommentAnswers(props.comment.id)}>
                                    Yanıtlar ({props.comment.amountOfAnswers})
                                </a>
                            </p>
                            <div className="collapse" id={props.comment.id}>
                                <hr/>
                                <div className=" m-0 p-0">
                                    {renderAnswers()}
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <button className="btn btn-primary btn-sm" onClick={handleClickShowCommentArea}>Yanıtla</button>
                            {renderCommentArea()}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
