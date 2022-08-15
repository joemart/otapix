import { useState } from 'react';
import { Difficulty } from '../../../../enums';
import { PuzzlePack } from '../../../../types';
import { RectangularDropzone } from '../../Dropzone/RectangularDropzone';
import { DifficultyRadioGroup } from '../../RadioGroup/DifficultyRadioGroup';
import style from './PackEditor.module.css';
import { useEffect } from 'react';

interface PackEditorProps {
    currentPack: PuzzlePack;
}
const difficulties = Object.values(Difficulty) as string[];

export default function PackEditor({ currentPack }: PackEditorProps) {
    const [checkedDifficulty, setCheckedDifficulty] = useState<any>(Difficulty.F);

    useEffect(() => {
        currentPack?.difficulty && setCheckedDifficulty(currentPack?.difficulty);
    }, [currentPack]);

    return (
        <div className={style.container}>
            <p>Couverture</p>
            <RectangularDropzone
                label='Telecharger une image'
                value={currentPack?.cover}
            />
            <p>Titre</p>
            <input
                className={style.title_input}
                type="text"
                placeholder='Trouvez un titre pour votre pack...'
                value={currentPack?.title}
            />
            <p>Difficulte</p>
            <small>Veuillez choisir une difficulte pour votre pack</small>
            <DifficultyRadioGroup
                difficulties={difficulties}
                checkedDifficulty={checkedDifficulty}
                setCheckedDifficulty={setCheckedDifficulty} />
        </div>
    );
}