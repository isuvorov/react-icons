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

var GoFilePdf = function (_React$Component) {
    _inherits(GoFilePdf, _React$Component);

    function GoFilePdf() {
        _classCallCheck(this, GoFilePdf);

        return _possibleConstructorReturn(this, (GoFilePdf.__proto__ || Object.getPrototypeOf(GoFilePdf)).apply(this, arguments));
    }

    _createClass(GoFilePdf, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.5 2.5h-22.5v35h30v-27.5l-7.5-7.5z m-20 2.5h10c-0.5 0.2-1.1 0.6-1.4 1.7-0.5 1.9-0.2 5.1 0.7 8.2-1 3.1-4.8 10.8-5.1 11.2-0.6 0.2-2.6 0.9-4.2 2.3v-23.4z m11.1 12c2.2 5.9 3.7 5.9 5.2 6.6-3.2 0.5-5.7 0.8-9 2.3-0.2 0.2 2.9-5.7 3.8-8.9z m13.9 18l-25 0c0 0 0 0 0.1 0 1.3 0 3.3-0.8 7-7.1 1.5-0.6 2.8-1.1 3.1-1.2 2.3-0.5 4.9-1 7.3-1.3 2.1 1.1 5 1.8 6.6 1.9 0.3 0 0.6 0 0.9-0.1v7.8z m0-12.1c-0.9-0.6-2.1-1-3.5-1-0.9 0-2 0-3.1 0.2-1-0.5-3.6-1.3-5.7-7.5 0.7-4 0.5-6.8 0.5-6.8 0.3-2-0.9-2.8-2-2.8 0 0 0 0 0 0h6.3l7.5 7.5v10.4z' })
                )
            );
        }
    }]);

    return GoFilePdf;
}(React.Component);

exports.default = GoFilePdf;
module.exports = exports['default'];