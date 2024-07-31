import { Request, Response, NextFunction } from 'express';
import qrcode, { QRCode } from 'qrcode';

export default async (req: Request, res: Response, next: NextFunction) => {
    const url = 'https://www.goggle.com';
    const data = "{ name: 'Mothupi', surname: 'Ramogayana' }";
    const qrCode = await qrcode.toDataURL(data);
    return res.render('./views/payment.view.html', { data: qrCode });
};