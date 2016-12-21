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

var GoIssueClosed = function (_React$Component) {
    _inherits(GoIssueClosed, _React$Component);

    function GoIssueClosed() {
        _classCallCheck(this, GoIssueClosed);

        return _possibleConstructorReturn(this, (GoIssueClosed.__proto__ || Object.getPrototypeOf(GoIssueClosed)).apply(this, arguments));
    }

    _createClass(GoIssueClosed, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.5 12.3l-3.7 3.8 6.2 6.4 10-10-3.7-3.7-6.2 6.2-2.6-2.7z m-7.5 20.2c-6.9 0-12.5-5.6-12.5-12.5 0-6.9 5.6-12.5 12.5-12.5 3.5 0 6.6 1.4 8.8 3.7l3.6-3.6c-3.2-3.1-7.6-5.1-12.4-5.1-9.7 0-17.5 7.8-17.5 17.5s7.8 17.5 17.5 17.5c9.7 0 17.5-7.8 17.5-17.5l-7.8 7.8c0.3-0.4-2.9 4.7-9.7 4.7z m2.5-22.5h-5v12.5h5v-12.5z m-5 20h5v-5h-5v5z' })
                )
            );
        }
    }]);

    return GoIssueClosed;
}(React.Component);

exports.default = GoIssueClosed;
module.exports = exports['default'];