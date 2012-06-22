#pragma strict
private var stars : ParticleSystem;

function Start () {
	stars = this.GetComponent(ParticleSystem);
	stars.Play();
	stars.Simulate(400.00);
	stars.Pause();

}

function Update () {
}