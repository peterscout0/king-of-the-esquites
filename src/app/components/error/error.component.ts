import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements AfterViewInit {
  @ViewChild('container', { static: true }) container!: ElementRef;
  @ViewChild('block', { static: true }) block!: ElementRef;
  @ViewChild('mario', { static: true }) mario!: ElementRef;

  private blocks = [4, 0, 4];
  private colors = ['red', 'green', 'blue', 'yellow'];
  private marioSpeed = 5;
  private moveTime = 10;

  private blockOn = 0;
  private moveMarioInterval: any = null;
  private stepsTaken = 0;

  private marioPositions = [-22, -219, -414];
  private bgPositionOn = 0;

  ngAfterViewInit(): void {
    this.resetMario();
  }

  resetMario(): void {
    const blockPos = this.container.nativeElement.clientHeight * 0.5;
    this.mario.nativeElement.style.bottom = '20px';
    this.mario.nativeElement.style.left = '0px';
    this.block.nativeElement.style.top = `${blockPos}px`;
    this.blockOn = 0;
    this.resetInterval();
    this.setupInitialMovement();
  }

  setupInitialMovement(): void {
    this.moveMarioInterval = setInterval(() => {
      this.moveMario();
      const underBlock = this.checkMarioUnderBlock();
      if (underBlock) {
        this.setupJump();
      }
    }, this.moveTime);
  }

  moveMario(): void {
    const currentPos = parseInt(this.mario.nativeElement.style.left, 10);
    this.mario.nativeElement.style.left = `${currentPos + this.marioSpeed}px`;

    if (this.stepsTaken >= 5) {
      this.mario.nativeElement.style.backgroundPositionX = `${this.marioPositions[this.bgPositionOn]}px`;
      this.bgPositionOn = 1 - this.bgPositionOn;
      this.stepsTaken = 0;
    } else {
      this.stepsTaken++;
    }
  }

  resetInterval(): void {
    clearInterval(this.moveMarioInterval);
    this.moveMarioInterval = null;
  }

  checkMarioUnderBlock(): boolean {
    const blockPos = this.block.nativeElement.getBoundingClientRect();
    const marioPos = this.mario.nativeElement.getBoundingClientRect();

    return blockPos.left < marioPos.left && blockPos.right > marioPos.left;
  }

  setupJump(): void {
    this.resetInterval();
    this.bgPositionOn = 1;
    this.mario.nativeElement.style.backgroundPositionX = `${this.marioPositions[this.bgPositionOn]}px`;
    this.moveMarioInterval = setInterval(() => {
      if (this.blockOn >= this.blocks.length) {
        this.continueMoving();
      } else {
        this.jump();
        this.blockOn++;
      }
    }, 2000);
  }

  jump(): void {
    const jumpHeight = parseInt(this.block.nativeElement.clientHeight, 10) + parseInt(this.block.nativeElement.style.top, 10);
    const bodyHeight = this.container.nativeElement.clientHeight;
    const marioHeight = parseInt(this.mario.nativeElement.clientHeight, 10);
    this.mario.nativeElement.style.bottom = `${bodyHeight - jumpHeight - marioHeight}px`;
    this.mario.nativeElement.style.backgroundPositionX = `${this.marioPositions[2]}px`;

    setTimeout(() => {
      this.hitBlock();
    }, 300);

    setTimeout(() => {
      this.mario.nativeElement.style.backgroundPositionX = `${this.marioPositions[this.bgPositionOn]}px`;
    }, 600);
  }

  hitBlock(): void {
    this.block.nativeElement.classList.add('hit');
    setTimeout(() => {
        this.block.nativeElement.classList.remove('hit');
    }, 200);

    this.mario.nativeElement.style.bottom = '20px';
    const newNumber = document.createElement('div');
    newNumber.innerHTML = this.blocks[this.blockOn - 1].toString();
    newNumber.style.position = 'absolute';
    newNumber.style.top = `${parseInt(this.block.nativeElement.style.top, 10) - 50}px`; // Ajusta la posición del número
    newNumber.style.left = '53%';
    newNumber.style.transform = 'translate(-50%, -90%)';
    newNumber.style.color = this.getRandomColor();
    newNumber.style.fontSize = '60px'; // Tamaño de fuente adecuado
    newNumber.style.lineHeight = '200px'; // Ajustar la altura de la línea para centrar verticalmente
    newNumber.style.width = '110px'; // Ajustar ancho del contenedor
    newNumber.style.height = '130px'; // Ajustar altura del contenedor
    newNumber.classList.add('number');
    this.container.nativeElement.appendChild(newNumber);

    setTimeout(() => {
        this.container.nativeElement.removeChild(newNumber);
    }, 1500);
}

  getRandomColor(): string {
    const newColor = Math.floor(Math.random() * 4);
    return this.colors[newColor];
  }

  continueMoving(): void {
    this.resetInterval();
    this.moveMarioInterval = setInterval(() => {
      this.moveMario();
      const offScreen = this.checkIfOffScreen();
      if (offScreen) {
        this.resetMario();
      }
    }, this.moveTime);
  }

  checkIfOffScreen(): boolean {
    const marioLeft = parseInt(this.mario.nativeElement.style.left, 10);
    return marioLeft > this.container.nativeElement.clientWidth;
  }
}
