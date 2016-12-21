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

var MdScreenRotation = function (_React$Component) {
    _inherits(MdScreenRotation, _React$Component);

    function MdScreenRotation() {
        _classCallCheck(this, MdScreenRotation);

        return _possibleConstructorReturn(this, (MdScreenRotation.__proto__ || Object.getPrototypeOf(MdScreenRotation)).apply(this, arguments));
    }

    _createClass(MdScreenRotation, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm12.5 35.8l2.3-2.2 6.3 6.3-1.1 0.1c-10.5 0-19.1-8.1-19.9-18.4h2.5c0.6 6.3 4.4 11.6 9.9 14.2z m12.2-0.5l10.6-10.6-20-20-10.6 10.6z m-7.7-32.4l20.1 20.1c1 0.9 1 2.5 0 3.5l-10.6 10.6c-1 1-2.5 1-3.5 0l-20.1-20.1c-1-0.9-1-2.5 0-3.5l10.6-10.6c1-1 2.5-1 3.5 0z m10.5 1.3l-2.3 2.2-6.3-6.3 1.1-0.1c10.5 0 19.1 8.1 19.9 18.4h-2.5c-0.6-6.3-4.4-11.6-9.9-14.2z' })
                )
            );
        }
    }]);

    return MdScreenRotation;
}(React.Component);

exports.default = MdScreenRotation;
module.exports = exports['default'];