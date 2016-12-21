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

var IoIosBody = function (_React$Component) {
    _inherits(IoIosBody, _React$Component);

    function IoIosBody() {
        _classCallCheck(this, IoIosBody);

        return _possibleConstructorReturn(this, (IoIosBody.__proto__ || Object.getPrototypeOf(IoIosBody)).apply(this, arguments));
    }

    _createClass(IoIosBody, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm16.3 6.3c0-2.5 1.2-3.8 3.7-3.8s3.8 1.3 3.8 3.8-1.3 3.7-3.8 3.7-3.7-1.2-3.7-3.7z m16.8 5c0.6 0 1 0.1 1.4 0.5s0.5 0.8 0.5 1.3-0.2 1-0.5 1.4-0.8 0.5-1.4 0.5h-7.6c-0.7 0.2-1.2 0.5-1.4 1.1-0.3 0.7-0.3 2.1 0 4.1l0.4 1.6v0.1l2.3 13.4c0.1 0.6 0 1-0.3 1.4s-0.6 0.7-1.2 0.8-1 0-1.4-0.3-0.7-0.7-0.8-1.3l-1.6-9.3v0l-0.2-0.7c0-0.4-0.2-0.8-0.4-1.2s-0.5-0.6-0.8-0.6h-0.2c-0.6 0-1.1 0.8-1.4 2.5v0l-1.6 9.3c-0.1 0.6-0.4 1-0.8 1.3s-0.9 0.4-1.4 0.3-0.9-0.4-1.2-0.8-0.4-0.8-0.3-1.4l2.3-13.4v-0.1l0.4-1.6c0.3-2 0.4-3.4 0-4.1-0.2-0.6-0.7-0.9-1.4-1.1h-7.6c-0.6 0-1-0.2-1.4-0.5s-0.5-0.8-0.5-1.4 0.2-0.9 0.5-1.3 0.8-0.5 1.4-0.5h26.2z' })
                )
            );
        }
    }]);

    return IoIosBody;
}(React.Component);

exports.default = IoIosBody;
module.exports = exports['default'];