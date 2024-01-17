export default function handler(req, res) {
    console.log(req);

    res.status(200).json(
        {
        data: [
                {
                    titdle: "title",
                    description: "description",
                    htmlContent: "htmlContent",
                    readTimeInMinute: "readTimeInMinute",
                }
            ],
            isSuccess: true,
            message: "Veriler başarıyla listelendi."
        }
    );
};
