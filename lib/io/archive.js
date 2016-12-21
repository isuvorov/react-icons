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

var IoArchive = function (_React$Component) {
    _inherits(IoArchive, _React$Component);

    function IoArchive() {
        _classCallCheck(this, IoArchive);

        return _possibleConstructorReturn(this, (IoArchive.__proto__ || Object.getPrototypeOf(IoArchive)).apply(this, arguments));
    }

    _createClass(IoArchive, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.5 24.1l-10-9.1h6.3v-7.5h7.5v7.5h6.2z m16.3-0.9c0.9 0.5 1.4 1.5 1.2 2.5l-0.7 5.2c-0.2 1.1-0.7 1.6-2.2 1.6h-29.2c-1.4 0-2-0.5-2.2-1.6l-0.7-5.2c-0.2-1 0.2-2 1.1-2.5l5.6-4.3h3.3l-4.8 4.9h3.9c0.1 0 0.4 0 0.4 0.2l1.4 3.5h13.2l1.4-3.5c0-0.2 0.2-0.2 0.4-0.2h3.9l-4.8-4.9h3.3z' })
                )
            );
        }
    }]);

    return IoArchive;
}(React.Component);

exports.default = IoArchive;
module.exports = exports['default'];