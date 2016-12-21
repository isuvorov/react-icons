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

var MdBugReport = function (_React$Component) {
    _inherits(MdBugReport, _React$Component);

    function MdBugReport() {
        _classCallCheck(this, MdBugReport);

        return _possibleConstructorReturn(this, (MdBugReport.__proto__ || Object.getPrototypeOf(MdBugReport)).apply(this, arguments));
    }

    _createClass(MdBugReport, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm23.4 20v-3.4h-6.8v3.4h6.8z m0 6.6v-3.2h-6.8v3.2h6.8z m10-13.2v3.2h-3.6c0.1 0.6 0.2 1.2 0.2 1.8v1.6h3.4v3.4h-3.4v1.6c0 0.5-0.1 1.1-0.2 1.6h3.6v3.4h-4.7c-1.7 3-5 5-8.7 5s-7-2-8.7-5h-4.7v-3.4h3.6c-0.1-0.5-0.2-1.1-0.2-1.6v-1.6h-3.4v-3.4h3.4v-1.6c0-0.6 0.1-1.2 0.2-1.8h-3.6v-3.2h4.7c0.8-1.4 1.8-2.5 3.1-3.3l-2.8-2.8 2.4-2.3 3.7 3.6c0.7-0.2 1.5-0.2 2.3-0.2s1.6 0 2.3 0.2l3.7-3.6 2.4 2.3-2.8 2.8c1.3 0.8 2.3 1.9 3.1 3.3h4.7z' })
                )
            );
        }
    }]);

    return MdBugReport;
}(React.Component);

exports.default = MdBugReport;
module.exports = exports['default'];