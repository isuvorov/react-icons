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

var IoAndroidCamera = function (_React$Component) {
    _inherits(IoAndroidCamera, _React$Component);

    function IoAndroidCamera() {
        _classCallCheck(this, IoAndroidCamera);

        return _possibleConstructorReturn(this, (IoAndroidCamera.__proto__ || Object.getPrototypeOf(IoAndroidCamera)).apply(this, arguments));
    }

    _createClass(IoAndroidCamera, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm12.6 21.9c0-3.3 1.6-4.9 4.9-4.9s4.9 1.6 4.9 4.9-1.6 4.9-4.9 4.9-4.9-1.6-4.9-4.9z m19.3-14.4c0.8 0 1.5 0.3 2.2 0.9s0.9 1.4 0.9 2.2v21.3c0 0.8-0.3 1.5-0.9 2.2s-1.4 0.9-2.2 0.9h-28.8c-0.8 0-1.5-0.3-2.2-0.9s-0.9-1.4-0.9-2.2v-21.3c0-0.8 0.3-1.5 0.9-2.2s1.4-0.9 2.2-0.9h6.9l2.5-2.5h10l2.5 2.5h6.9z m-14.4 23.1c2.4 0 4.5-0.8 6.2-2.6s2.6-3.7 2.6-6.1-0.9-4.5-2.6-6.2-3.8-2.6-6.2-2.6-4.5 0.9-6.2 2.6-2.5 3.8-2.5 6.2 0.8 4.4 2.5 6.1 3.8 2.6 6.2 2.6z' })
                )
            );
        }
    }]);

    return IoAndroidCamera;
}(React.Component);

exports.default = IoAndroidCamera;
module.exports = exports['default'];