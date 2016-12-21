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

var IoIosFilingOutline = function (_React$Component) {
    _inherits(IoIosFilingOutline, _React$Component);

    function IoIosFilingOutline() {
        _classCallCheck(this, IoIosFilingOutline);

        return _possibleConstructorReturn(this, (IoIosFilingOutline.__proto__ || Object.getPrototypeOf(IoIosFilingOutline)).apply(this, arguments));
    }

    _createClass(IoIosFilingOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.5 10l5 7.5v12.5h-27.5v-12.5l5-7.5h17.5z m3.5 7.5l-3.5-5.3v5.3h3.5z m-19.7-6.2v6.2h3.7c0 2 1.7 3.8 3.8 3.8s3.7-1.8 3.7-3.8h3.8v-6.2h-15z m-1.3 0.9l-3.5 5.3h3.5v-5.3z m21.3 16.6v-10h-7.7c-0.6 2.1-2.5 3.7-4.8 3.7s-4.3-1.6-4.9-3.7h-7.6v10h25z' })
                )
            );
        }
    }]);

    return IoIosFilingOutline;
}(React.Component);

exports.default = IoIosFilingOutline;
module.exports = exports['default'];