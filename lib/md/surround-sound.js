'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdSurroundSound = function (_React$Component) {
    _inherits(MdSurroundSound, _React$Component);

    function MdSurroundSound() {
        _classCallCheck(this, MdSurroundSound);

        return _possibleConstructorReturn(this, (MdSurroundSound.__proto__ || Object.getPrototypeOf(MdSurroundSound)).apply(this, arguments));
    }

    _createClass(MdSurroundSound, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 16.6c1.8 0 3.4 1.6 3.4 3.4s-1.6 3.4-3.4 3.4-3.4-1.6-3.4-3.4 1.6-3.4 3.4-3.4z m9.5 12.9c2.5-2.6 3.9-6.1 3.9-9.5s-1.4-6.9-3.9-9.5l-2.5 2.5c2 1.9 3 4.4 3 7s-0.9 5.2-2.9 7.1z m-9.5-2.9c3.7 0 6.6-2.9 6.6-6.6s-2.9-6.6-6.6-6.6-6.6 2.9-6.6 6.6 2.9 6.6 6.6 6.6z m-7 0.4c-2-1.9-3-4.4-3-7s0.9-5.2 2.9-7.1l-2.4-2.4c-2.5 2.6-3.9 6.1-3.9 9.5s1.4 6.9 3.9 9.5z m20.4-20.4c1.8 0 3.2 1.6 3.2 3.4v20c0 1.8-1.4 3.4-3.2 3.4h-26.8c-1.8 0-3.2-1.6-3.2-3.4v-20c0-1.8 1.4-3.4 3.2-3.4h26.8z' })
                )
            );
        }
    }]);

    return MdSurroundSound;
}(React.Component);

exports.default = MdSurroundSound;
module.exports = exports['default'];