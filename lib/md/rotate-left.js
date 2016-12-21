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

var MdRotateLeft = function (_React$Component) {
    _inherits(MdRotateLeft, _React$Component);

    function MdRotateLeft() {
        _classCallCheck(this, MdRotateLeft);

        return _possibleConstructorReturn(this, (MdRotateLeft.__proto__ || Object.getPrototypeOf(MdRotateLeft)).apply(this, arguments));
    }

    _createClass(MdRotateLeft, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm21.6 6.8c6.6 0.8 11.8 6.4 11.8 13.2s-5.2 12.4-11.8 13.2v-3.4c4.8-0.7 8.4-4.9 8.4-9.8s-3.6-9.1-8.4-9.8v6.4l-7.5-7.4 7.5-7.6v5.2z m-9.8 23.7l2.4-2.4c1.3 1 2.7 1.5 4.2 1.7v3.4c-2.4-0.3-4.6-1.2-6.6-2.7z m-1.6-8.9c0.2 1.5 0.7 2.9 1.6 4.2l-2.3 2.3c-1.5-1.9-2.4-4.1-2.7-6.5h3.4z m1.7-7.4c-0.9 1.3-1.5 2.7-1.7 4.2h-3.4c0.3-2.4 1.2-4.6 2.7-6.5z' })
                )
            );
        }
    }]);

    return MdRotateLeft;
}(React.Component);

exports.default = MdRotateLeft;
module.exports = exports['default'];