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

var IoIosKeypad = function (_React$Component) {
    _inherits(IoIosKeypad, _React$Component);

    function IoIosKeypad() {
        _classCallCheck(this, IoIosKeypad);

        return _possibleConstructorReturn(this, (IoIosKeypad.__proto__ || Object.getPrototypeOf(IoIosKeypad)).apply(this, arguments));
    }

    _createClass(IoIosKeypad, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30.9 26.6c2.3 0 4.1 1.9 4.1 4.3s-1.8 4.1-4.1 4.1-4.3-1.8-4.3-4.1 1.9-4.3 4.3-4.3z m-10.9 0c2.3 0 4.1 1.9 4.1 4.3s-1.8 4.1-4.1 4.1-4.1-1.8-4.1-4.1 1.8-4.3 4.1-4.3z m-10.9 0c2.4 0 4.3 1.9 4.3 4.3s-1.9 4.1-4.3 4.1-4.1-1.8-4.1-4.1 1.8-4.3 4.1-4.3z m21.8-10.7c2.3 0 4.1 1.8 4.1 4.1s-1.8 4.1-4.1 4.1-4.3-1.8-4.3-4.1 1.9-4.1 4.3-4.1z m-10.9 0c2.3 0 4.1 1.8 4.1 4.1s-1.8 4.1-4.1 4.1-4.1-1.8-4.1-4.1 1.8-4.1 4.1-4.1z m-10.9 0c2.4 0 4.3 1.8 4.3 4.1s-1.9 4.1-4.3 4.1-4.1-1.8-4.1-4.1 1.8-4.1 4.1-4.1z m21.8-2.5c-2.4 0-4.3-1.9-4.3-4.3s1.9-4.1 4.3-4.1 4.1 1.8 4.1 4.1-1.8 4.3-4.1 4.3z m-10.9-8.4c2.3 0 4.1 1.8 4.1 4.1s-1.8 4.3-4.1 4.3-4.1-1.9-4.1-4.3 1.8-4.1 4.1-4.1z m-10.9 0c2.4 0 4.3 1.8 4.3 4.1s-1.9 4.3-4.3 4.3-4.1-1.9-4.1-4.3 1.8-4.1 4.1-4.1z' })
                )
            );
        }
    }]);

    return IoIosKeypad;
}(React.Component);

exports.default = IoIosKeypad;
module.exports = exports['default'];