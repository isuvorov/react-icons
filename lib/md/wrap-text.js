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

var MdWrapText = function (_React$Component) {
    _inherits(MdWrapText, _React$Component);

    function MdWrapText() {
        _classCallCheck(this, MdWrapText);

        return _possibleConstructorReturn(this, (MdWrapText.__proto__ || Object.getPrototypeOf(MdWrapText)).apply(this, arguments));
    }

    _createClass(MdWrapText, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.4 18.4c3.6 0 6.6 2.9 6.6 6.6s-3 6.6-6.6 6.6h-3.4v3.4l-5-5 5-5v3.4h3.8c1.7 0 3.3-1.6 3.3-3.4s-1.6-3.4-3.3-3.4h-22.2v-3.2h21.8z m5-10v3.2h-26.8v-3.2h26.8z m-26.8 23.2v-3.2h10v3.2h-10z' })
                )
            );
        }
    }]);

    return MdWrapText;
}(React.Component);

exports.default = MdWrapText;
module.exports = exports['default'];