import Image from "next/image";
import Comments from "../comment/comments";
import {Article} from "../../service/model/article/article";

type ArticleContentProp = {
    articleId: string
}

export default function ArticleContent(props: ArticleContentProp): JSX.Element {

    return (
        <>
            <nav className="row mt-4">
                <section className="col-lg-12">
                    <div className="row">
                        <div className="col-6">

                            <h6>
                                <Image alt="test" width={16} height={16} src="/svg/calendar2-date.svg"/>
                                &nbsp;12.04.2024 23:30
                            </h6>
                            <Image
                                alt="test"
                                width={16}
                                height={16}
                                src="/svg/stopwatch.svg"/>
                            <small>&nbsp;5 dk.</small>
                            <div>
                                <Image
                                    alt="test"
                                    width={16}
                                    height={16}
                                    src="/svg/card-text.svg"/>
                                <small>&nbsp;45</small>
                            </div>
                        </div>
                        <div className="col-6 text-end">
                            <h6>Bu Yazıyı Paylaş!</h6>
                            <div className="d-flex gap-2 justify-content-end">
                                <Image alt="test" width={16} height={16} src="/svg/facebook.svg"/>
                                <Image alt="test" width={16} height={16} src="/svg/linkedin.svg"/>
                                <Image alt="test" width={16} height={16} src="/svg/twitter-x.svg"/>
                                <Image alt="test" width={16} height={16} src="/svg/instagram.svg"/>
                            </div>

                        </div>
                    </div>
                </section>
            </nav>
            <article className="row bg-body text">
                <h1 className="text-center">Lorem Ipsum</h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum non felis sit amet ullamcorper. Etiam suscipit turpis quam. Duis vitae velit sem. Aenean faucibus at purus et viverra. Cras quis placerat metus, et iaculis enim. Donec vehicula dui id turpis molestie semper. Mauris quis quam ut nisl dapibus scelerisque. Pellentesque mollis rutrum pulvinar. Proin tempor justo id felis blandit condimentum. Donec posuere fermentum augue. Etiam egestas finibus diam. In et dolor eu nunc feugiat posuere. Duis quam turpis, condimentum id pretium eu, feugiat auctor nibh.

                Nunc odio justo, eleifend sit amet ullamcorper quis, feugiat a dui. Proin in libero malesuada, vestibulum neque et, venenatis lectus. Donec turpis nisi, sollicitudin vel rutrum et, congue eget felis. Morbi viverra sodales odio sit amet commodo. Cras vitae volutpat velit. Integer malesuada tortor tristique, mattis nulla ac, porttitor turpis. Praesent in varius libero, id pharetra odio. Vivamus elementum lectus risus. Duis ut est id risus ornare pharetra sed sit amet dolor. Maecenas lacinia pulvinar auctor. Praesent finibus imperdiet ipsum, in ultrices eros maximus in.

                Nulla commodo congue dapibus. Integer non lacinia nulla, dictum dignissim tortor. Integer lacus massa, aliquam sed massa consectetur, tincidunt condimentum diam. Sed interdum orci vel accumsan fermentum. Curabitur ornare, orci eget molestie ultricies, diam massa dapibus massa, nec tincidunt felis justo a ligula. Suspendisse mollis mi eu pellentesque commodo. Quisque hendrerit arcu nibh, vel mattis arcu blandit sed. Nulla ipsum ligula, imperdiet in dui sed, euismod dictum sem. Vestibulum eget quam eget nunc mollis ullamcorper. Fusce dapibus vel ante non accumsan. Sed a metus eu nibh fermentum elementum. Pellentesque mauris nulla, lobortis sed ante nec, pharetra imperdiet velit. Nam at sem vel diam elementum tempus et sit amet sem. Donec turpis erat, semper eu nisl at, sagittis pharetra nunc. Nullam id sem laoreet, tristique sapien ut, vestibulum leo. In efficitur nulla non dolor mattis congue.

                Nulla aliquet, felis nec fringilla facilisis, nulla sapien pellentesque dui, et auctor mi est quis erat. Donec convallis elit ligula, nec rutrum risus euismod sed. Praesent id aliquam sem. Donec eget lobortis erat. Aliquam sagittis venenatis massa sed elementum. Curabitur sollicitudin massa nulla, ut dictum orci efficitur nec. Fusce vitae luctus eros. Integer sollicitudin ex id lorem placerat, blandit interdum tortor lacinia. Aenean sapien tellus, venenatis sed justo in, dapibus interdum turpis. Donec nec placerat purus, quis lacinia eros.
            </article>
            <Comments articleId={props.articleId}/>
        </>
    );
}