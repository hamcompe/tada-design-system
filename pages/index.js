import Link from 'next/link'
import Button from 'components/Button/Button'
import AnchorButton from 'components/AnchorButton/AnchorButton'

export default function Page() {
  return (
    <div>
      <h1>Tada Design System</h1>
      <Button>Button</Button>
      <Link href="https://google.com" passHref>
        <AnchorButton>google.com</AnchorButton>
      </Link>
    </div>
  )
}
