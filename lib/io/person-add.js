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

var IoPersonAdd = function (_React$Component) {
    _inherits(IoPersonAdd, _React$Component);

    function IoPersonAdd() {
        _classCallCheck(this, IoPersonAdd);

        return _possibleConstructorReturn(this, (IoPersonAdd.__proto__ || Object.getPrototypeOf(IoPersonAdd)).apply(this, arguments));
    }

    _createClass(IoPersonAdd, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31 25.6h-3.3v-4h-3.9v-3.2h3.9v-4h3.3v4h4v3.2h-4v4z m-1 9.4h-30s0-2 0.2-3.1c0.1-0.9 1.3-2 6.3-3.9 4.9-1.7 4.7-0.9 4.7-4.2 0-2.2-1.1-0.9-1.8-5-0.3-1.7-0.5-0.6-1.1-3.2-0.3-1.3 0.2-1.5 0.1-2.1s-0.1-1.2-0.3-2.6c-0.1-1.6 1.4-5.9 6.9-5.9s7 4.3 6.9 5.9c-0.2 1.4-0.3 2-0.3 2.6s0.4 0.8 0.1 2.1c-0.6 2.6-0.8 1.5-1.1 3.1-0.7 4.2-1.8 2.9-1.8 5 0 3.4-0.2 2.5 4.7 4.3 5 1.9 6.2 3 6.3 3.9 0.2 1.1 0.2 3.1 0.2 3.1z' })
                )
            );
        }
    }]);

    return IoPersonAdd;
}(React.Component);

exports.default = IoPersonAdd;
module.exports = exports['default'];