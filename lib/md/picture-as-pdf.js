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

var MdPictureAsPdf = function (_React$Component) {
    _inherits(MdPictureAsPdf, _React$Component);

    function MdPictureAsPdf() {
        _classCallCheck(this, MdPictureAsPdf);

        return _possibleConstructorReturn(this, (MdPictureAsPdf.__proto__ || Object.getPrototypeOf(MdPictureAsPdf)).apply(this, arguments));
    }

    _createClass(MdPictureAsPdf, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm23.4 19.1v-5h1.6v5h-1.6z m-16.8-9.1v23.4h23.4v3.2h-23.4q-1.3 0-2.3-0.9t-0.9-2.3v-23.4h3.2z m8.4 5.9v-1.8h1.6v1.8h-1.6z m19.1-1.8v-2.5h-5v10h2.5v-3.2h2.5v-2.5h-2.5v-1.8h2.5z m-6.6 5v-5q0-1-0.7-1.7t-1.8-0.8h-4.1v10h4.1q1.1 0 1.8-0.7t0.7-1.8z m-8.4-3.2v-1.8q0-1-0.7-1.7t-1.8-0.8h-4.1v10h2.5v-3.2h1.6q1.1 0 1.8-0.8t0.7-1.7z m14.3-12.5q1.3 0 2.3 0.9t0.9 2.3v20q0 1.4-0.9 2.4t-2.3 1h-20q-1.4 0-2.4-1t-1-2.4v-20q0-1.3 1-2.3t2.4-0.9h20z' })
                )
            );
        }
    }]);

    return MdPictureAsPdf;
}(React.Component);

exports.default = MdPictureAsPdf;
module.exports = exports['default'];