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

var IoIosReverseCamera = function (_React$Component) {
    _inherits(IoIosReverseCamera, _React$Component);

    function IoIosReverseCamera() {
        _classCallCheck(this, IoIosReverseCamera);

        return _possibleConstructorReturn(this, (IoIosReverseCamera.__proto__ || Object.getPrototypeOf(IoIosReverseCamera)).apply(this, arguments));
    }

    _createClass(IoIosReverseCamera, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.7 12.5c1.4 0 2.3 1.1 2.3 2.4v13.8c0 1.3-0.9 2.6-2.3 2.6h-25c-1.4 0-2.7-1.3-2.7-2.6v-13.8c0-1.3 1.3-2.4 2.7-2.4h1v-1.2h2.6v1.2h1c2.5-2.8 3.4-3.7 4.3-3.7h6.9c1 0 1.8 0.9 4.3 3.7h4.9z m-8.2 13.4l0.1-0.2-0.9-0.9-0.1 0.1c-1 0.9-2.3 1.4-3.6 1.4-2.8 0-5.2-2.3-5.5-4.9h2.4l-3.1-3.9-2.9 3.9h2.3c0.4 3.3 3.3 6.1 6.8 6.1 1.6 0 3.2-0.5 4.5-1.6z m1.7-1.9l2.9-4h-2.3c-0.2-1.6-0.9-3.4-2.1-4.5-1.3-1.1-3-1.7-4.7-1.7-1.6 0-3.2 0.5-4.5 1.6l-0.1 0.1 0.9 1 0.1-0.2c1-0.8 2.3-1.3 3.6-1.3 2.8 0 5.2 2.3 5.5 5h-2.4z' })
                )
            );
        }
    }]);

    return IoIosReverseCamera;
}(React.Component);

exports.default = IoIosReverseCamera;
module.exports = exports['default'];