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

var MdNoEncryption = function (_React$Component) {
    _inherits(MdNoEncryption, _React$Component);

    function MdNoEncryption() {
        _classCallCheck(this, MdNoEncryption);

        return _possibleConstructorReturn(this, (MdNoEncryption.__proto__ || Object.getPrototypeOf(MdNoEncryption)).apply(this, arguments));
    }

    _createClass(MdNoEncryption, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm14.8 10v2l-3-3c0.5-4.2 3.9-7.4 8.2-7.4 4.6 0 8.4 3.8 8.4 8.4v3.4h1.6c1.8 0 3.4 1.4 3.4 3.2v14l-17.3-17.2h9.1v-3.4c0-2.8-2.4-5.2-5.2-5.2s-5.2 2.4-5.2 5.2z m20.2 26.3l-2 2.1-1.9-1.9c-0.3 0.1-0.7 0.1-1.1 0.1h-20c-1.8 0-3.4-1.4-3.4-3.2v-16.8c0-1.2 0.8-2.3 1.8-2.8l-3.4-3.4 2-2z' })
                )
            );
        }
    }]);

    return MdNoEncryption;
}(React.Component);

exports.default = MdNoEncryption;
module.exports = exports['default'];