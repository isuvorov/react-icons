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

var MdLabelOutline = function (_React$Component) {
    _inherits(MdLabelOutline, _React$Component);

    function MdLabelOutline() {
        _classCallCheck(this, MdLabelOutline);

        return _possibleConstructorReturn(this, (MdLabelOutline.__proto__ || Object.getPrototypeOf(MdLabelOutline)).apply(this, arguments));
    }

    _createClass(MdLabelOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.6 28.4l6-8.4-6-8.4h-18.2v16.8h18.2z m2.8-18.6l7.2 10.2-7.2 10.2c-0.6 0.9-1.7 1.4-2.8 1.4h-18.2c-1.8 0-3.4-1.4-3.4-3.2v-16.8c0-1.8 1.6-3.2 3.4-3.2h18.2c1.1 0 2.1 0.5 2.8 1.4z' })
                )
            );
        }
    }]);

    return MdLabelOutline;
}(React.Component);

exports.default = MdLabelOutline;
module.exports = exports['default'];