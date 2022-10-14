import { Request, Response } from 'express'
import { ISignatureService } from '../interfaces/ISignatureService'
import { JoiService } from '../services/joiService'

class SignatureController {
  constructor(private _signatureService: ISignatureService) {}

  public signatures = async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.params.id)
    const signatures = await this._signatureService.signatures(id)
    res.status(200).json(signatures)
  }

  public checkout = async (req: Request, res: Response): Promise<void> => {
    const data = req.body
    if (!req.file) {
      res.status(400).json({ message: 'File not found' })
    }
    data.file = req.file?.filename
    await JoiService.validateDataSignature(data)
    const signature = await this._signatureService.checkout(
      data.userId,
      data.productId,
      data.file
    )
    res.status(201).json(signature)
  }
}

export { SignatureController }
