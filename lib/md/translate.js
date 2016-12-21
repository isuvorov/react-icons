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

var MdTranslate = function (_React$Component) {
    _inherits(MdTranslate, _React$Component);

    function MdTranslate() {
        _classCallCheck(this, MdTranslate);

        return _possibleConstructorReturn(this, (MdTranslate.__proto__ || Object.getPrototypeOf(MdTranslate)).apply(this, arguments));
    }

    _createClass(MdTranslate, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.5 28.4h5.4l-2.8-7.3z m4.4-11.8l7.5 20h-3.4l-1.9-5h-7.9l-1.8 5h-3.4l7.5-20h3.4z m-9.4 8.5l-1.3 3.4-5.2-5.1-8.4 8.2-2.3-2.3 8.5-8.4c-2.1-2.3-3.7-4.8-5-7.5h3.4c1 1.9 2.2 3.8 3.8 5.5 2.4-2.6 4.2-5.7 5.3-8.9h-18.7v-3.4h11.8v-3.2h3.2v3.2h11.8v3.4h-5c-1.2 3.9-3.2 7.7-6.1 10.9l-0.1 0z' })
                )
            );
        }
    }]);

    return MdTranslate;
}(React.Component);

exports.default = MdTranslate;
module.exports = exports['default'];