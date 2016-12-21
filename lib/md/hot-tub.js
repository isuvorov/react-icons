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

var MdHotTub = function (_React$Component) {
    _inherits(MdHotTub, _React$Component);

    function MdHotTub() {
        _classCallCheck(this, MdHotTub);

        return _possibleConstructorReturn(this, (MdHotTub.__proto__ || Object.getPrototypeOf(MdHotTub)).apply(this, arguments));
    }

    _createClass(MdHotTub, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm24.5 9.8c1.7 1.6 2.4 3.9 2.1 6.1l-0.1 0.7h-3.2l0.2-0.9c0.3-1.3-0.2-2.8-1.2-3.7-1.7-1.8-2.5-4-2.2-6.3l0.1-0.7h3.2l-0.2 1c-0.2 1.3 0.2 2.7 1.1 3.7z m6.6 0c1.7 1.6 2.5 3.9 2.2 6.1l-0.2 0.7h-3.1l0.2-0.9c0.2-1.3-0.2-2.7-1.1-3.7l-0.2 0c-1.7-1.8-2.5-4-2.2-6.3l0.2-0.7h3.1l-0.2 1c-0.2 1.3 0.2 2.7 1.1 3.7z m0.5 23.6v-10h-3.2v10h3.2z m-6.6 0v-10h-3.4v10h3.4z m-6.6 0v-10h-3.4v10h3.4z m-6.8 0v-10h-3.2v10h3.2z m7-13.4h18v13.4c0 1.8-1.4 3.2-3.2 3.2h-26.8c-1.8 0-3.2-1.4-3.2-3.2v-13.4h5v-1.2c0-2.1 1.7-3.8 3.7-3.8 1.2 0 2.2 0.6 2.8 1.3l2.3 2.5c0.4 0.5 0.8 0.8 1.4 1.2z m-10.2-10c0-1.9 1.4-3.4 3.2-3.4s3.4 1.5 3.4 3.4-1.5 3.4-3.4 3.4-3.2-1.5-3.2-3.4z' })
                )
            );
        }
    }]);

    return MdHotTub;
}(React.Component);

exports.default = MdHotTub;
module.exports = exports['default'];