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

var IoPricetag = function (_React$Component) {
    _inherits(IoPricetag, _React$Component);

    function IoPricetag() {
        _classCallCheck(this, IoPricetag);

        return _possibleConstructorReturn(this, (IoPricetag.__proto__ || Object.getPrototypeOf(IoPricetag)).apply(this, arguments));
    }

    _createClass(IoPricetag, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.3 20.4c0.9 0.9 0.9 2.4 0 3.4l-12.9 13c-0.9 0.9-2.3 0.9-3.3 0.1l-0.2-0.3-16.1-16.3-0.5-0.4c-0.4-0.5-0.7-1.1-0.8-1.9v-0.1l-0.5-7.7v-0.3c0-0.9 0.3-1.9 1-2.6l3.8-3.8c0.7-0.7 1.6-1 2.5-1h0.3l7.8 0.3c0.9 0 1.7 0.3 2.3 1l0.2 0.1 16.4 16.5z m-25.5-5.4c2 0 3.7-1.7 3.7-3.7s-1.7-3.8-3.7-3.8-3.8 1.7-3.8 3.8 1.7 3.7 3.8 3.7z' })
                )
            );
        }
    }]);

    return IoPricetag;
}(React.Component);

exports.default = IoPricetag;
module.exports = exports['default'];