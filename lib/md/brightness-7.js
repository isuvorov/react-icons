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

var MdBrightness7 = function (_React$Component) {
    _inherits(MdBrightness7, _React$Component);

    function MdBrightness7() {
        _classCallCheck(this, MdBrightness7);

        return _possibleConstructorReturn(this, (MdBrightness7.__proto__ || Object.getPrototypeOf(MdBrightness7)).apply(this, arguments));
    }

    _createClass(MdBrightness7, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 13.4q2.7 0 4.7 1.9t1.9 4.7-1.9 4.7-4.7 1.9-4.7-1.9-1.9-4.7 1.9-4.7 4.7-1.9z m0 16.6q4.1 0 7.1-2.9t2.9-7.1-2.9-7.1-7.1-2.9-7.1 2.9-2.9 7.1 2.9 7.1 7.1 2.9z m13.4-15.5l5.4 5.5-5.4 5.5v7.9h-7.9l-5.5 5.4-5.5-5.4h-7.9v-7.9l-5.4-5.5 5.4-5.5v-7.9h7.9l5.5-5.4 5.5 5.4h7.9v7.9z' })
                )
            );
        }
    }]);

    return MdBrightness7;
}(React.Component);

exports.default = MdBrightness7;
module.exports = exports['default'];