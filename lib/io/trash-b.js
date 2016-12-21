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

var IoTrashB = function (_React$Component) {
    _inherits(IoTrashB, _React$Component);

    function IoTrashB() {
        _classCallCheck(this, IoTrashB);

        return _possibleConstructorReturn(this, (IoTrashB.__proto__ || Object.getPrototypeOf(IoTrashB)).apply(this, arguments));
    }

    _createClass(IoTrashB, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.3 10.4c0.3 0.9 0.4 0.9-0.5 0.9h-23.6c-0.9 0-0.8 0-0.5-0.9 0.1-0.7 0.3-1 0.3-1 0.2-0.7 0.7-0.7 1.5-0.9l4.1-0.5c0.5-0.1 0.5-0.1 0.8-0.6 0.7-1.5 0.8-2.4 1.5-2.4h8.1c0.8 0 0.9 0.9 1.6 2.4 0.3 0.5 0.3 0.5 0.8 0.6l4.1 0.4c0.8 0.2 1.3 0.2 1.5 0.9 0 0 0.2 0.4 0.3 1.1z m-2.7 3.4c1.3 0 1.4 0.1 1.3 1.1l-1.4 18.9c-0.2 1-0.2 1.2-1.4 1.2h-16.2c-1.2 0-1.2-0.2-1.4-1.2l-1.4-18.9c-0.1-0.9 0-1.1 1.3-1.1h19.2z' })
                )
            );
        }
    }]);

    return IoTrashB;
}(React.Component);

exports.default = IoTrashB;
module.exports = exports['default'];