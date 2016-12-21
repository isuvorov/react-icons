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

var GoChecklist = function (_React$Component) {
    _inherits(GoChecklist, _React$Component);

    function GoChecklist() {
        _classCallCheck(this, GoChecklist);

        return _possibleConstructorReturn(this, (GoChecklist.__proto__ || Object.getPrototypeOf(GoChecklist)).apply(this, arguments));
    }

    _createClass(GoChecklist, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.7 20.2l-1.9-2c-0.3-0.2-0.7-0.2-0.9 0l-4.1 4.1-4.7 4.7-3.7-3.6c-0.2-0.3-0.6-0.3-0.9 0l-1.9 1.9c-0.3 0.3-0.3 0.7 0 0.9l6 6.1c0.3 0.2 0.7 0.2 0.9 0l11.2-11.2c0.3-0.3 0.3-0.7 0-0.9z m-20.8 2.5l2-2c1.6-1.6 4.5-1.6 6.2 0l1 1 4.4-4.2v-12.5h-22.5v27.5h12.5l-3.6-3.6c-1.7-1.7-1.7-4.5 0-6.2z m-1.4-15.2h12.5v2.5h-12.5v-2.5z m0 5h12.5v2.5h-12.5v-2.5z m-2.5 7.5h-2.5v-2.5h2.5v2.5z m0-5h-2.5v-2.5h2.5v2.5z m0-5h-2.5v-2.5h2.5v2.5z m2.5 7.5h2.5v2.5h-2.5v-2.5z' })
                )
            );
        }
    }]);

    return GoChecklist;
}(React.Component);

exports.default = GoChecklist;
module.exports = exports['default'];