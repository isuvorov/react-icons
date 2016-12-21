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

var MdBrush = function (_React$Component) {
    _inherits(MdBrush, _React$Component);

    function MdBrush() {
        _classCallCheck(this, MdBrush);

        return _possibleConstructorReturn(this, (MdBrush.__proto__ || Object.getPrototypeOf(MdBrush)).apply(this, arguments));
    }

    _createClass(MdBrush, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.5 7.7c0.7 0.7 0.7 1.8 0 2.4l-14.9 14.9-4.6-4.6 14.9-14.9c0.6-0.7 1.7-0.7 2.4 0z m-22.9 15.7c2.8 0 5 2.2 5 5 0 3.6-2.9 6.6-6.6 6.6-2.5 0-5.1-1.3-6.6-3.4 1.4 0 3.2-1.1 3.2-3.2 0-2.8 2.3-5 5-5z' })
                )
            );
        }
    }]);

    return MdBrush;
}(React.Component);

exports.default = MdBrush;
module.exports = exports['default'];